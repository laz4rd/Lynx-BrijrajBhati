"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface GitHubEvent {
  type: string;
  created_at: string;
  payload?: {
    commits?: Array<{ message: string }>;
    size?: number;
  };
}

const chartConfig = {
  activity: {
    label: "Activity",
    color: "#22c55e", // GitHub-style green
  },
} satisfies ChartConfig

export function GitHubContributionsChart() {
  const [data, setData] = useState<{ date: string; activity: number }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState("15d")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch recent events from GitHub API
        const response = await fetch("https://api.github.com/users/laz4rd/events?per_page=100")
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("GitHub user 'laz4rd' not found")
          } else if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded. Try again later.")
          }
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const events: GitHubEvent[] = await response.json()
        console.log("GitHub Events:", events) // Debug log
        
        // Filter for contribution events
        const contributionEvents = events.filter(event => 
          ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent'].includes(event.type)
        )
        
        // Group events by date and count them
        const dailyContributions = new Map<string, number>()
        
        contributionEvents.forEach(event => {
          const date = new Date(event.created_at).toISOString().split('T')[0] // YYYY-MM-DD format
          
          let contributionCount = 1
          
          // For push events, count the number of commits
          if (event.type === 'PushEvent' && event.payload?.commits) {
            contributionCount = event.payload.commits.length
          } else if (event.type === 'PushEvent' && event.payload?.size) {
            contributionCount = event.payload.size
          }
          
          dailyContributions.set(date, (dailyContributions.get(date) || 0) + contributionCount)
        })
        
        // Create time range based data
        const days = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 15
        const chartData = Array.from({ length: days }, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - (days - 1 - i))
          const dateStr = date.toISOString().split('T')[0]
          
          return {
            date: dateStr,
            activity: dailyContributions.get(dateStr) || 0
          }
        })
        
        console.log("Processed data:", chartData)
        setData(chartData)
        
      } catch (err) {
        console.error("Error fetching GitHub data:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch data")
        
        // Fallback with mock data
        const days = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 15
        const mockData = Array.from({ length: days }, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - (days - 1 - i))
          return {
            date: date.toISOString().split('T')[0],
            activity: Math.floor(Math.random() * 8)
          }
        })
        setData(mockData)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [timeRange])

  if (loading) {
    return (
      <Card className="pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>GitHub Activity</CardTitle>
            <CardDescription>Loading your recent activity...</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <div className="flex h-[250px] items-center justify-center">
            <div className="text-muted-foreground">Loading...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getDescription = () => {
    const period = timeRange === "30d" ? "30 days" : timeRange === "7d" ? "7 days" : "15 days"
    const base = `Your activity over the last ${period}`
    return error ? `${base} (using mock data due to API error)` : base
  }

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>GitHub Activity</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
          {error && (
            <div className="text-sm text-red-500">
              Error: {error}
            </div>
          )}
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select time range"
          >
            <SelectValue placeholder="Last 15 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
            <SelectItem value="15d" className="rounded-lg">
              Last 15 days
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillActivity" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#22c55e"
                  stopOpacity={0.8}
                />
                <stop
                  offset="50%"
                  stopColor="#16a34a"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="#15803d"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  formatter={(value, name) => [
                    value,
                    name === "activity" ? " Activities" : name
                  ]}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="activity"
              type="natural"
              fill="url(#fillActivity)"
              stroke="#16a34a"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}