import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function mapNumber(response: Observable<any>): Observable<number> {
  return response.pipe(
    map(data => Number(data))
  );
}
