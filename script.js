import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <section className="bg-gradient-to-b from-[#1db954] to-[#121212] py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Bollywood Beats
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the best Bollywood music, curated just for you.
          </p>
          <div className="w-full max-w-md">
            <Input
              type="search"
              placeholder="Search for songs, artists, and more"
              className="bg-white text-black rounded-full px-4 py-2 w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Popular Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Bollywood Hits", image: "/placeholder.svg" },
            { title: "Romantic Melodies", image: "/placeholder.svg" },
            { title: "Upbeat Anthems", image: "/placeholder.svg" },
            { title: "Retro Classics", image: "/placeholder.svg" },
          ].map((playlist, index) => (
            <Card key={index}>
              <img
                src={playlist.image}
                alt={playlist.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{playlist.title}</h3>
                <Button variant="outline" className="mt-4">
                  Play
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">New Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Dil Bole Hadippa",
              artist: "Sunidhi Chauhan, Sukhwinder Singh",
              album: "Dil Bole Hadippa",
              image: "/placeholder.svg",
            },
            {
              title: "Dhoom Machale",
              artist: "Sunidhi Chauhan, Sukhwinder Singh",
              album: "Dhoom",
              image: "/placeholder.svg",
            },
            {
              title: "Chittiyaan Kalaiyaan",
              artist: "Meet Bros, Kanika Mann",
              album: "Roy",
              image: "/placeholder.svg",
            },
            {
              title: "Galliyan",
              artist: "Ankit Tiwari",
              album: "Ek Villain",
              image: "/placeholder.svg",
            },
          ].map((song, index) => (
            <Card key={index}>
              <img
                src={song.image}
                alt={song.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
                <p className="text-sm text-gray-400">{song.album}</p>
                <Button variant="outline" className="mt-4">
                  Play
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Genres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Romantic", image: "/placeholder.svg" },
            { title: "Upbeat", image: "/placeholder.svg" },
            { title: "Retro", image: "/placeholder.svg" },
            { title: "Devotional", image: "/placeholder.svg" },
          ].map((genre, index) => (
            <Card key={index}>
              <img
                src={genre.image}
                alt={genre.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{genre.title}</h3>
                <Button variant="outline" className="mt-4">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
