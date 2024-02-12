import type { Asset, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeAdmissionInfoFields {
    description?: EntryFields.Symbol[];
    title: EntryFields.Symbol;
}

export type TypeAdmissionInfo = EntrySkeletonType<TypeAdmissionInfoFields>;

export interface TypeArtistFields {
    name: EntryFields.Symbol;
    description?: EntryFields.Text;
    image?: Asset;
    spotifyUrl?: EntryFields.Symbol;
    soundCloudUrl?: EntryFields.Symbol;
    facebookUrl?: EntryFields.Symbol;
    websiteUrl?: EntryFields.Symbol;
}

export type TypeArtist = EntrySkeletonType<TypeArtistFields>;

export interface TypeEventFields {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    startDate: EntryFields.Date;
    endDate?: EntryFields.Date;
    featuredImage?: Asset;
    description?: EntryFields.Text;
    venue?: EntrySkeletonType<TypeVenueFields>;
    admissionInfo?: EntrySkeletonType<TypeAdmissionInfoFields>;
    ticketUrl?: EntryFields.Symbol;
    facebookUrl?: EntryFields.Symbol;
    artists?: EntrySkeletonType<TypeArtistFields>[];
}

export type TypeEvent = EntrySkeletonType<TypeEventFields>;

export interface TypeInformationFields {
    title: EntryFields.Symbol;
    content: EntryFields.Text;
    slug: EntryFields.Symbol;
}

export type TypeInformation = EntrySkeletonType<TypeInformationFields>;

export interface TypeSocialLinkFields {
    title?: EntryFields.Symbol;
    url?: EntryFields.Symbol;
    type: "facebook" | "instagram" | "soundcloud" | "spotify";
}

export type TypeSocialLink = EntrySkeletonType<TypeSocialLinkFields>;

export interface TypeVenueFields {
    name: EntryFields.Symbol;
    location?: EntryFields.Location;
    streetAddress?: EntryFields.Symbol;
    postalCode?: EntryFields.Symbol;
    city?: EntryFields.Symbol;
}

export type TypeVenue = EntrySkeletonType<TypeVenueFields>;