/**
 * Migration repository
 */

import { MigrationScript } from './migration-script';

export type MigrationRepositoryType = 'fs';

export interface MigrationRepository {

    /**
     * Load all available migration scripts from the repository
     */
    loadAll(): Promise<Array<MigrationScript>>;

    /**
     * Create a blank migration
     * @param humanFriendlyName A name for the migration (e.g. Add users table)
     * @param content Migration script content
     */
    create(humanFriendlyName: string, content: string): Promise<void>;
}
