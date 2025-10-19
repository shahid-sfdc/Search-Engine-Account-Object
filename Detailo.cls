public with sharing class Detailo {
    @AuraEnabled(cacheable=true)
    public static List<SObject> result(String objectApiName, String searchKey) {
       
        string likeKey = '%' + searchKey + '%';
        string query = 'SELECT Id, Name FROM ' + objectApiName + ' WHERE Name LIKE :likeKey';
        List<SObject> fetchedDetails = Database.query(query, AccessLevel.USER_MODE);
        return fetchedDetails;

    }
}