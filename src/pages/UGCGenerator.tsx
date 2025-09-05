import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Upload, Sparkles, Download, Play, RotateCcw, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";

const UGCGenerator = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    if (!uploadedImage || !caption) return;
    
    setIsGeneratingImage(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage(uploadedImage); // Using uploaded image as placeholder
      setIsGeneratingImage(false);
    }, 3000);
  };

  const handleGenerateVideo = async () => {
    if (!generatedImage) return;
    
    setIsGeneratingVideo(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedVideo("placeholder-video.mp4");
      setIsGeneratingVideo(false);
    }, 4000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              UGC Video Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your product photos into authentic user-generated content videos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Panel - Inputs */}
            <div className="space-y-6">
              {/* Upload Section */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 w-5 h-5" />
                    Upload Product Photo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    {uploadedImage ? (
                      <div className="space-y-4">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded product" 
                          className="max-w-full h-48 object-contain mx-auto rounded-lg"
                        />
                        <Button variant="outline" size="sm">
                          <RotateCcw className="mr-2 w-4 h-4" />
                          Replace Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                          <Upload className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-medium mb-2">Drop your product photo here</p>
                          <p className="text-muted-foreground">or click to browse files</p>
                        </div>
                        <Badge variant="secondary">JPG, PNG up to 10MB</Badge>
                      </div>
                    )}
                    
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Caption Section */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Describe your product and the lifestyle scene you want to create. For example: 'Premium wireless headphones being used by a young professional in a modern coffee shop'"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="min-h-24 resize-none"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      {caption.length}/500 characters
                    </p>
                    <Button 
                      onClick={handleGenerateImage}
                      disabled={!uploadedImage || !caption || isGeneratingImage}
                      className="bg-gradient-primary hover:opacity-90 shadow-glow"
                    >
                      {isGeneratingImage ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 w-4 h-4" />
                          Generate AI Image
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Generate Video Section */}
              {generatedImage && (
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle>Create UGC Video</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Transform your AI-generated lifestyle image into an engaging UGC video
                    </p>
                    <Button 
                      onClick={handleGenerateVideo}
                      disabled={isGeneratingVideo}
                      className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
                    >
                      {isGeneratingVideo ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Creating Video...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Generate UGC Video
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Panel - Outputs */}
            <div className="space-y-6">
              {/* Generated Image Preview */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>AI Generated Image</CardTitle>
                </CardHeader>
                <CardContent>
                  {isGeneratingImage ? (
                    <div className="flex flex-col items-center justify-center h-64 bg-muted/50 rounded-lg">
                      <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                      <p className="text-muted-foreground">AI is creating your lifestyle image...</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={generatedImage} 
                        alt="AI generated lifestyle scene" 
                        className="w-full rounded-lg hover-lift"
                      />
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">
                          <RotateCcw className="mr-2 w-4 h-4" />
                          Regenerate
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Download className="mr-2 w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 bg-muted/50 rounded-lg">
                      <Sparkles className="w-12 h-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Your AI-generated image will appear here</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Generated Video Preview */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>UGC Video</CardTitle>
                </CardHeader>
                <CardContent>
                  {isGeneratingVideo ? (
                    <div className="flex flex-col items-center justify-center h-64 bg-muted/50 rounded-lg">
                      <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                      <p className="text-muted-foreground">Creating your UGC video...</p>
                    </div>
                  ) : generatedVideo ? (
                    <div className="space-y-4">
                      <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                          <p className="text-muted-foreground">Video Preview</p>
                          <p className="text-sm text-muted-foreground">Click to play UGC video</p>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow">
                        <Download className="mr-2 w-4 h-4" />
                        Download Video (MP4)
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 bg-muted/50 rounded-lg">
                      <Play className="w-12 h-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Your UGC video will appear here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UGCGenerator;