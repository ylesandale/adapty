/**
 * Reusable decorative elements
 */

export const DecorativeBlur = () => (
  <>
    <div className="absolute top-10 right-4 md:top-20 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-secondary/50 rounded-full blur-2xl -z-10" />
  </>
)

export const DecorativeBlurAlt = () => (
  <>
    <div className="absolute top-10 left-4 md:top-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-32 h-32 md:w-40 md:h-40 bg-purple-500/5 rounded-full blur-3xl -z-10" />
  </>
)
