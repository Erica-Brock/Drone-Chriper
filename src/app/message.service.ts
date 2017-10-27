import{ Injectable } from '@angular/core';

import {IMessage} from './imessage';
import { mockMessages} from './mock-messages';

@Injectable()
export class MessageService{
    getMessages():Promise<IMessage[]>{
        return Promise.resolve(mockMessages);
    }
    
    getMyMessage(id:number):Promise<IMessage> {
        return this.getMessages().then((mockMessages) => {
            return mockMessages.find((IMessage) => {
                return IMessage.id === id
            });
        }
    )};
}