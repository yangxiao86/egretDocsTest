module Test {

    export class test4 {
        public constructor() {

        }

        public start(): void {
            var arr1: Array<number> = [];
            var a: string;
            var i: number;
            for (i = 0; i < 100000; i++) {
                arr1.push(i);
            }

            var ctime1: number = new Date().getTime();
            for (i = 0; i < arr1.length; i++) {
                a = i.toString();
            }

            console.log(new Date().getTime() - ctime1);//ºÄÊ±£º47 

            var ctime2: number = new Date().getTime();
            var length: number = arr1.length;
            for (i = 0; i < length; ++i) {
                a = i.toString();
            }
            console.log(new Date().getTime() - ctime2);//ºÄÊ±£º38 
        }
    }
} 