import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ConstantsUrl {

  public static REST_HACKER_NEWS = `${environment.hackerNewsApi}`;


}
