export type ArtKind = 'skin' | 'fragrance' | 'motion' | 'streetwear' | 'identity' | 'packaging' | 'social'

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  label: string
  format: string
  art: ArtKind
  hook: string
  description: string
  direction: string
  deliverables: string[]
}

export const categories = [
  { id: 'all', name: 'All work' },
  { id: 'avatar', name: 'AI Avatar UGC' },
  { id: 'voiceover', name: 'Voiceover Ads' },
  { id: 'motion', name: 'Motion & Type' },
  { id: 'design', name: 'Graphic Design' },
]

export const projects: Project[] = [
  { id: 'daily-ritual', title: 'The daily ritual', subtitle: 'Skincare · UGC concept', category: 'avatar', label: 'AI AVATAR UGC', format: '9:16', art: 'skin', hook: 'Your skin. But better.', description: 'A skincare launch concept built around a familiar feeling: finding the one thing that makes your morning routine simpler.', direction: 'Soft sage, tactile packaging, and a first-person hook. A proposed AI presenter introduces the product before a close-up reveal and an understated call to action.', deliverables: ['Hook and script direction', 'Vertical ad storyboard', 'Product visual and caption system'] },
  { id: 'venti-absolu', title: 'VENTI ABSOLU', subtitle: 'Fragrance · Product ad concept', category: 'voiceover', label: 'VOICEOVER AD', format: '9:16', art: 'fragrance', hook: 'This smells like a feeling.', description: 'A fragrance concept that sells a mood, not a list of notes. Warm light, an amber bottle, and a moment worth lingering on.', direction: 'An intimate voiceover is proposed over sculptural product shots. Minimal typography and an amber palette keep the visual world unmistakably premium.', deliverables: ['Product ad creative direction', 'Voiceover script concept', 'Packaging and visual styling'] },
  { id: 'stop-the-scroll', title: 'Stop the scroll', subtitle: 'Kinetic typography · Motion study', category: 'motion', label: 'MOTION & TYPE', format: '9:16', art: 'motion', hook: 'Made you look.', description: 'A bold kinetic type study exploring how a few words can fill a screen, find a rhythm, and interrupt the feed.', direction: 'Oversized condensed lettering, electric lilac, and repeating star forms. The concept uses scale and contrast to make the message impossible to miss.', deliverables: ['Kinetic type art direction', 'Animated visual study', 'Social-first type system'] },
  { id: 'off-duty', title: 'OFF / DUTY', subtitle: 'Streetwear · Drop campaign concept', category: 'voiceover', label: 'VOICEOVER AD', format: '9:16', art: 'streetwear', hook: 'Off duty. On purpose.', description: 'A streetwear drop concept with an independent spirit. A stark graphic treatment puts the identity first and lets the attitude do the talking.', direction: 'Monochrome grids, oversized type, and a single acid-green accent. Proposed voiceover and fast cuts turn the launch into a statement instead of a product listing.', deliverables: ['Drop campaign concept', 'Voiceover hook direction', 'Brand graphics and social assets'] },
  { id: 'form-identity', title: 'FORM / Brand identity', subtitle: 'Logo · Type system · Art direction', category: 'design', label: 'BRAND IDENTITY', format: '1:1', art: 'identity', hook: 'A form of expression.', description: 'An expressive identity study for an independent culture label. A flexible wordmark and a punchy palette create a visual system that can grow with the brand.', direction: 'Coral on paper-white, playful geometric marks, and uncompromising typography. The system translates naturally across printed matter, merch, and digital touchpoints.', deliverables: ['Wordmark and graphic language', 'Color and typography system', 'Brand application concepts'] },
  { id: 'venti-packaging', title: 'VENTI / Packaging', subtitle: 'Fragrance line · Packaging system', category: 'design', label: 'PACKAGING', format: '1:1', art: 'packaging', hook: 'An impression that stays.', description: 'A packaging study that carries the VENTI ABSOLU visual world beyond the screen. Quiet luxury with enough character to feel personal.', direction: 'Warm ivory boxes, a pared-back wordmark, and an amber glass bottle. Restrained color and deliberate spacing make every small detail count.', deliverables: ['Packaging visual direction', 'Label and box design concepts', 'Product presentation system'] },
  { id: 'common-ground', title: 'Common Ground / Social', subtitle: 'Social templates · Visual system', category: 'design', label: 'SOCIAL DESIGN', format: '1:1', art: 'social', hook: 'Good things grow here.', description: 'A social design system for a lifestyle brand that values everyday connection. A friendly, flexible grid keeps content consistent without making every post identical.', direction: 'Butter yellow, forest green, and a recurring flower mark. Modular layouts accommodate product stories, announcements, and community-first messages.', deliverables: ['Feed and story template concepts', 'Color and illustration language', 'Modular social layout system'] },
]
