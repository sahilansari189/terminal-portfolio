import Image from "next/image"

export default function WhoamiOutput() {
  return (
    <div className="flex gap-4 items-start my-4">
      <div className="border border-green-500 p-1">
        <Image
          src="/image.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded grayscale-0"

        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl text-green-400">Hello, I'm Sahil Ansari</h2>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-green-400">[x: </span>
            <a href="https://x.com/sahilansari189" className="text-green-400 underline hover:text-green-300">
              x.com/sahilansari189
            </a>
            <span className="text-green-400"> ]</span>
          </div>
          <div>
            <span className="text-green-400">[github: </span>
            <a href="https://github.com/sahilansari189" className="text-green-400 underline hover:text-green-300">
              github.com/sahilansari189
            </a>
            <span className="text-green-400"> ]</span>
          </div>
          <div>
            <span className="text-green-400">[email: </span>
            <a href="mailto:sa760887@gmail.com" className="text-green-400 underline hover:text-green-300">
              sa760887@gmail.com
            </a>
            <span className="text-green-400"> ]</span>
          </div>
        </div>
      </div>
    </div>
  )
}
