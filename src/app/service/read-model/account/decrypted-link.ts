
import { IRepresentation, IRepresentationCollection } from '../../../foundation/representation';
import { Entity } from '../../../foundation/entity';

export interface IDecryptedLinkAttributes {
    username?: string;
    link?: string;
}

export interface IDecryptedLink extends IRepresentation, IDecryptedLinkAttributes {
}

export interface IDecryptedLinkAttributesCollection extends IRepresentationCollection<IEmbeddedResources> {
}

export interface IEmbeddedResources {
    decryptedlinks: Array<IDecryptedLink>;
}

export class DecryptedLink extends Entity<IDecryptedLink> {
    constructor(representation?: IDecryptedLink) {
        super(representation);
    }

    public get username(): string { return this.$representation.username; }
    public set username(value: string) { this.$representation.username = value; }

    public get link(): string { return this.$representation.link; }
    public set link(value: string) { this.$representation.link = value; }
}
