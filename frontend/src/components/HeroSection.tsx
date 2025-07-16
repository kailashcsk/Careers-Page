import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import JCI_Logo from "../assets/jci_logo.png";

interface HeroSectionProps {
  className?: string;
  featuredImage?: string;
  innovationImage?: string;
  smartCitiesImage?: string;
  engineeringImage?: string;
  youtubeVideoId?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className = "",
  featuredImage,
  innovationImage,
  smartCitiesImage,
  engineeringImage,
  youtubeVideoId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };

  const videoId = youtubeVideoId ? getYouTubeVideoId(youtubeVideoId) : null;

  return (
    <section
      className={`bg-white text-gray-900 min-h-screen flex flex-col ${className}`}
    >
      {/* Header with Logo */}
      <header className="p-6 md:p-8 lg:p-12">
        <div className="flex items-center space-x-3">
          <a
            href="https://jobs.johnsoncontrols.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src={JCI_Logo}
              alt="Johnson Controls Logo"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
          </a>
          <a
            href="https://jobs.johnsoncontrols.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
              Johnson Controls
            </h1>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 lg:px-12 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-12 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 bg-clip-text text-transparent">
          JCI Next Gen Hub
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl leading-relaxed mb-8 md:mb-12 lg:mb-16">
          Your Gateway to a Future with JCI — Explore, Engage, Elevate.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 max-w-6xl w-full mb-8 md:mb-12 lg:mb-16">
          {/* Full Width Featured Image/Video */}
          <Card className="h-48 md:h-64 lg:h-100 rounded-2xl border-2 border-gray-300 overflow-hidden">
            <CardContent className="p-0 h-full relative">
              {videoId ? (
                <>
                  {/* Background Auto-playing Video */}
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                    title="JCI Featured Video"
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Play Button Overlay */}
                  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                      <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 group">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 md:p-6 lg:p-8 group-hover:bg-opacity-30 transition-all duration-300">
                          <Play className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white fill-white" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0">
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&showinfo=1&rel=0`}
                          title="JCI Featured Video - Full"
                          className="w-full h-full rounded-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                featuredImage && (
                  <img
                    src={featuredImage}
                    alt="JCI Featured Content"
                    className="w-full h-full object-cover"
                  />
                )
              )}
            </CardContent>
          </Card>
        </div>

        {/* Lower Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl w-full">
          {/* Large Image - Spans 2 columns on lg screens */}
          <Card className="lg:col-span-2 h-64 md:h-80 lg:h-96 rounded-2xl border-2 border-gray-300 overflow-hidden">
            <CardContent className="p-0 h-full relative">
              {innovationImage && (
                <img
                  src={innovationImage}
                  alt="Innovation & Technology"
                  className="w-full h-full object-cover"
                />
              )}
            </CardContent>
          </Card>

          {/* Right Column - Two stacked images */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Top Right Image */}
            <Card className="h-30 md:h-36 lg:h-44 rounded-2xl border-2 border-gray-300 overflow-hidden">
              <CardContent className="p-0 h-full relative">
                {smartCitiesImage && (
                  <img
                    src={smartCitiesImage}
                    alt="Smart Cities"
                    className="w-full h-full object-cover"
                  />
                )}
              </CardContent>
            </Card>

            {/* Bottom Right Image */}
            <Card className="h-30 md:h-36 lg:h-44 rounded-2xl border-2 border-gray-300 overflow-hidden">
              <CardContent className="p-0 h-full relative">
                {engineeringImage && (
                  <img
                    src={engineeringImage}
                    alt="Engineering Excellence"
                    className="w-full h-full object-cover"
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
