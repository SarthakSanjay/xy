interface typo {
    text : string
}
export function TypographyH4({text}:typo) {
    return (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {text}
      </h4>
    )
  }
  
  export function TypographyMuted({text}:typo) {
    return (
      <p className="text-sm text-muted-foreground">{text}</p>
    )
  }
  
  export function TypographyP({text}:typo) {
    return (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {text}
      </p>
    )
  }
  