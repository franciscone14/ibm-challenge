import { SnackbarProps } from "../components/Snackbar";
import { SnackbarContextType } from "../contexts/SnackbarContext";

export default class GeneralService {
    private context: SnackbarContextType;

    constructor(context: SnackbarContextType){
        this.context = context;
    }

    public handleSucess(msg: string){
        if(this.context.setContext){
            this.context.setContext({
                message: msg,
                type: 'success',
                visible: true
            });
        }
    }

    public handleError(msg: string){
        if(this.context.setContext){
            this.context.setContext({
                message: msg,
                type: 'danger',
                visible: true
            });
        }
    }
}