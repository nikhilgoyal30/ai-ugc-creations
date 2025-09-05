import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, Image, Video, Zap, BarChart3, Clock, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    {
      title: "Images Generated",
      value: "247",
      icon: Image,
      change: "+12% this month",
      changeType: "positive"
    },
    {
      title: "Videos Created",
      value: "89",
      icon: Video,
      change: "+8% this month", 
      changeType: "positive"
    },
    {
      title: "Credits Remaining",
      value: "156",
      icon: Zap,
      change: "Resets in 12 days",
      changeType: "neutral"
    },
    {
      title: "Total Projects",
      value: "34",
      icon: BarChart3,
      change: "+3 this week",
      changeType: "positive"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Sneaker Campaign",
      type: "UGC Video",
      date: "2 hours ago",
      status: "Completed"
    },
    {
      id: 2,
      title: "Skincare Routine",
      type: "Lifestyle Image",
      date: "5 hours ago", 
      status: "Processing"
    },
    {
      id: 3,
      title: "Coffee Product",
      type: "UGC Video",
      date: "1 day ago",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
                Welcome back, Alex 👋
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to create some amazing UGC content?
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <Link to="/ugc-generator">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  <Plus className="mr-2 w-5 h-5" />
                  Create New UGC Video
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-lift shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-accent rounded-lg">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge 
                      variant={stat.changeType === 'positive' ? 'default' : 'secondary'}
                      className={stat.changeType === 'positive' ? 'bg-success text-success-foreground' : ''}
                    >
                      {stat.changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </Badge>
                  </div>
                  
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {stat.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Projects */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Projects</span>
                    <Link to="/projects">
                      <Button variant="ghost" size="sm">
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover-lift">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-background rounded-lg">
                            {project.type === 'UGC Video' ? (
                              <Video className="w-5 h-5 text-primary" />
                            ) : (
                              <Image className="w-5 h-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{project.title}</h4>
                            <p className="text-sm text-muted-foreground">{project.type}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge 
                            variant={project.status === 'Completed' ? 'default' : 'secondary'}
                            className={project.status === 'Completed' ? 'bg-success text-success-foreground' : ''}
                          >
                            {project.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/ugc-generator">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="mr-2 w-4 h-4" />
                      New UGC Video
                    </Button>
                  </Link>
                  
                  <Link to="/projects">
                    <Button variant="outline" className="w-full justify-start">
                      <Image className="mr-2 w-4 h-4" />
                      Browse Projects
                    </Button>
                  </Link>
                  
                  <Link to="/settings">
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="mr-2 w-4 h-4" />
                      View Analytics
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Usage Overview */}
              <Card className="shadow-soft border-0 mt-6">
                <CardHeader>
                  <CardTitle>This Month's Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>AI Images</span>
                        <span className="text-muted-foreground">47/100</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full transition-smooth" style={{width: '47%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>UGC Videos</span>
                        <span className="text-muted-foreground">23/50</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full transition-smooth" style={{width: '46%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;