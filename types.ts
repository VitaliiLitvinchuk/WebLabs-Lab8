export interface IFunctional {
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
    id: number | null,
    parent_id: number,
    parent_category: ICategory | null,
    slug: string,
    title: string,
    description: string | null,
    created_at: Date | null,
    published_at: Date | null,
    updated_at: Date | null,
    deleted_at: Date | null
}

export const emptyCategory : ICategory = {
    id: null,
    parent_id: 1,
    parent_category: null,    
    created_at: null,
    updated_at: null,
    deleted_at: null,
    published_at: null,
    slug: '',
    title: '',
    description: '',
}

export interface IPost {
    id: number | null,
    category_id: number,
    user_id: number | null,
    slug: string,
    title: string,
    excerpt: string,
    content_raw: string,
    content_html: string | null,
    is_published: boolean,
    published_at: Date | null,
    created_at: Date | null,
    updated_at: Date | null,
    deleted_at: Date | null,
    user: IUser | null,
    category: ICategory | null
}

export const emptyPost: IPost = {
    id: null,
    category: null,
    created_at: null,
    updated_at: null,
    deleted_at: null,
    published_at: null,
    content_html: null,
    user: null,
    user_id: null,
    slug: '',
    title: '',
    is_published: false,
    excerpt: '',
    category_id: 1,
    content_raw: '',
}