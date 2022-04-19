import R from ".."

//Images types
export type ExternalLink=`${'http'|'https'}://${string}`
export type LightVariantImage=keyof typeof R.images.light
export type DarkVariantImage=keyof typeof R.images.dark
export type DefaultVariantImage=keyof typeof R.images.default

export type ImageSourceType = LightVariantImage | DefaultVariantImage |DarkVariantImage|ExternalLink


//Icons types
export type LightVariantIcons=keyof typeof R.icons.light
export type DarkVariantIcons=keyof typeof R.icons.dark
export type DefaultVariantIcons=keyof typeof R.icons.default
export type IconSourceType = LightVariantIcons | DarkVariantIcons |DefaultVariantIcons|ExternalLink



