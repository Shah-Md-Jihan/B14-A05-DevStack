const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* Animated Loader */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-400 border-r-violet-500" />

        {/* Inner Ring */}
        <div className="absolute inset-3 animate-spin rounded-full border-4 border-transparent border-b-pink-500 border-l-cyan-400 [animation-direction:reverse] [animation-duration:1.5s]" />

        {/* Center Icon */}
        <div className="h-8 w-8 animate-pulse rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-cyan-500/30" />
      </div>

      {/* Loading Text */}
      <h2 className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent">
        Loading
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Please wait while we prepare everything...
      </p>

      {/* Animated Dots */}
      <div className="mt-5 flex items-center gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:300ms]" />
      </div>
    </div>
  );
};

export default Loading;