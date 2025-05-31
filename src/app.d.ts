/// <reference types="@sveltejs/kit" />
import { ComponentType, SvelteComponent } from "svelte";

interface ImportMetaEnv extends Readonly<Record<string, string | undefined>> {
    readonly URARA_SITE_DOMAIN?: string;
    readonly URARA_SITE_PROTOCOL?: "http://" | "https://";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob: <Module = { [key: string]: unknown }>(
        pattern: string,
    ) => Record<string, Module>;
}

declare global {
    namespace Blog {
        namespace Post {
            type FrontmatterVideo = Partial<HTMLVideoElement> & {
                sources?: Partial<HTMLSourceElement>[];
            };
            type FrontmatterAudio = Partial<HTMLAudioElement> & {
                sources?: Partial<HTMLSourceElement>[];
            };
            type FrontmatterImage = Partial<HTMLImageElement> & {
                sources?: Partial<HTMLSourceElement>[];
                figcaption?: string;
            };
            type FrontmatterBase = {
                /** the title of article, non-article posts may omit titles. */
                title?: string;
                /** plain text sentence or two describing the post. */
                summary?: string;
                /** tags array, any plain text values you want. */
                tags?: string[];
                /** categories array, any plain text values you want. */
                categories?: string[];
                /** flags array, any plain text values you want. */
                flags?: string[];
            }
            type FrontmatterMedia = {
                /** the main image for article or photo post. */
                image?: string | FrontmatterImage;
                /** the image for multi-photo post. */
                images?: string[] | FrontmatterImage[];
                /** the main audio for audio post. */
                audio?: string | FrontmatterAudio;
                /** the main video for video post. */
                video?: string | FrontmatterVideo;
                /** image alternate text. */
                alt?: string;
            }
            type FrontmatterMention = {
                /** indicates this post is a bookmark of another URL. */
                bookmark_of?: string;
                /** the URL which the post is considered a "like" (favorite, star) of. */
                like_of?: string;
                /** the URL which the post is considered a "repost" of. */
                repost_of?: string;
                /** URL which the post is considered reply to. */
                in_reply_to?: string;
            }
            type Frontmatter =
                & {
                    /**
                     * the created date of the post.
                     * @remarks auto-generated or set manually
                     */
                    created: string;
                    /**
                     * enable some advanced features.
                     * @property hidden - deprecated, transfer to `unlisted`
                     * @property unlisted - hide this post from the homepage and feed.
                     * @property bridgy-fed - add a link to Bridgy Fed in the post. https://fed.brid.gy/
                     * @property bridgy-{target} - add a link to Bridgy in the post. https://brid.gy/publish/{target}
                     */
                    flags?: string[];
                    /**
                     * the featured image for article, or image for "photo" / "multi-photo" posts.
                     * @remarks currently only supports string
                     */
                    image?: string;
                    /**
                     * post layout.
                     */
                    layout?: "article" | "note" | "photo" | "reply";
                    /**
                     * post path.
                     * @remarks auto-generated
                     */
                    path: string;
                    /**
                     * the published date of the post.
                     */
                    published?: string;
                    /**
                     * post slug.
                     * @remarks auto-generated
                     */
                    slug: string;
                    /**
                     * table of contents.
                     * @remarks auto-generated, article-only, set to `false` to disable
                     */
                    toc?: false | Toc[];
                    /**
                     * post type.
                     */
                    type:
                    | "article"
                    | "audio"
                    | "bookmark"
                    | "like"
                    | "note"
                    | "photo"
                    | "reply"
                    | "repost"
                    | "video";
                    /**
                     * the updated date of the post.
                     * @remarks auto-generated or set manually
                     */
                    updated: string;
                }
                & Omit<FrontmatterBase, "flags">
                & Pick<FrontmatterMedia, "alt">
                & Pick<FrontmatterMention, "in_reply_to">;

            interface Toc {
                children?: Toc[];
                depth: number;
                slug?: string;
                title?: string;
            }
            interface Module {
                default: ComponentType<
                    SvelteComponent<Record<string, any>, any, any>
                >;
                metadata: Frontmatter;
            }
        }
        type Post = { html?: string } & Post.Frontmatter;
        interface Page {
            path: string;
            title?: string;
        }
    }
}
