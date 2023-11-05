import Api from '@/services/Api';
import hat from '../../../server/src/models/hat';

export default {
    index (search){
        return Api().get("hats");
    },
    show (hatId){
        return Api().get("hat/"+hatId);
    },
    post (hat){
        return Api().post("hat",hat);
    },
    put (hat){
        return Api().put("hat/"+hat.id, hat);
    },
    delete (hat){
        return Api().delete("hat/"+hat.id, hat);
    }
}