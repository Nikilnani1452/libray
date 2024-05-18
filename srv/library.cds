using {com.satinfotech.cloudapps as db} from '../db/schema';

service Library {
    entity Library as projection on db.Library;
}
annotate Library.Library with @odata.draft.enabled;