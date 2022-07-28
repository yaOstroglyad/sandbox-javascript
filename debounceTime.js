
// myDebounceTime = <T>(debounce: number) => (source: Observable<T>) => {
//     return new Observable((observer: Observer<T>) => {
//         let timeoutId: any;
//         let sourceCompleted = false;
//         const subscription = source.subscribe((next: T) => {
//                 if(timeoutId) {
//                     clearTimeout(timeoutId);
//                 }
//                 timeoutId = setTimeout(() => {
//                     console.log('value in my debounceTime', next);
//                     observer.next(next);
//                     console.log('timeoutId', timeoutId);
//                     timeoutId = undefined;
//                     if(sourceCompleted) {
//                         observer.complete();
//                     }
//                 }, debounce);
//             },
//             (err: any) => observer.error(err),
//             () => {
//                 sourceCompleted = true;
//                 if(!timeoutId) {
//                     observer.complete();
//                 }
//             }
//         );
//
//         return subscription;
//     });
// }