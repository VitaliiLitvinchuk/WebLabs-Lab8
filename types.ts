export interface IColumn {
    key: string, 
    label: string
}

export interface IUser {
    id: number | null,
    name: string | null,
    email: string | null,
    email_verified_at: Date | null,
    two_factor_confirmed_at: Date | null,
    current_team_id: number | null,
    profile_photo_path: string | null,
    created_at: Date | null,
    updated_at: Date | null,
    profile_photo_url: string | null
}

export interface ICategory {
    id: number,
    parent_id: number | null,
    parent_category: ICategory | null,
    slug: string,
    title: string,
    description: string | null,
    created_at: Date | null,
    updated_at: Date | null,
    deleted_at: Date | null
}

export interface IPost {
    id: number,
    category_id: number,
    user_id: number,
    slug: string,
    title: string,
    excerpt: string,
    content_raw: string,
    content_html: string,
    is_published: boolean,
    published_at: Date | null,
    created_at: Date | null,
    updated_at: Date | null,
    deleted_at: Date | null,
    user: IUser,
    category: ICategory
}