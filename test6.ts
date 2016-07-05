module Test {

    export class test6 {
        public constructor() {

        }

        //测试在V8中，64个属性与64属性以上的性能差别 
        public start(): void {
            var obj: any = {};

            //for(var i = 0; i < 16; i ++){
            //    obj["prop"+i] = i;
            //}

            obj.prop0 = "test";
            obj.prop1 = "test";
            obj.prop2 = "test";
            obj.prop3 = "test";
            obj.prop4 = "test";
            obj.prop5 = "test";
            obj.prop6 = "test";
            obj.prop7 = "test";
            obj.prop8 = "test";
            obj.prop9 = "test";
            obj.prop10 = "test";
            obj.prop11 = "test";
            obj.prop12 = "test";
            obj.prop13 = "test";
            obj.prop14 = "test";
            obj.prop15 = "test";
            obj.prop16 = "test";
            obj.prop17 = "test";
            obj.prop18 = "test";
            obj.prop19 = "test";
            obj.prop20 = "test";
            obj.prop21 = "test";
            obj.prop22 = "test";
            obj.prop23 = "test";
            obj.prop24 = "test";
            obj.prop25 = "test";
            obj.prop26 = "test";
            obj.prop27 = "test";
            obj.prop28 = "test";
            obj.prop29 = "test";
            obj.prop30 = "test";
            obj.prop31 = "test";
            obj.prop32 = "test";
            obj.prop33 = "test";
            obj.prop34 = "test";
            obj.prop35 = "test";
            obj.prop36 = "test";
            obj.prop37 = "test";
            obj.prop38 = "test";
            obj.prop39 = "test";
            obj.prop40 = "test";
            obj.prop41 = "test";
            obj.prop42 = "test";
            obj.prop43 = "test";
            obj.prop44 = "test";
            obj.prop45 = "test";
            obj.prop46 = "test";
            obj.prop47 = "test";
            obj.prop48 = "test";
            obj.prop49 = "test";
            obj.prop50 = "test";
            obj.prop51 = "test";
            obj.prop52 = "test";
            obj.prop53 = "test";
            obj.prop54 = "test";
            obj.prop55 = "test";
            obj.prop56 = "test";
            obj.prop57 = "test";
            obj.prop58 = "test";
            obj.prop59 = "test";
            obj.prop60 = "test";
            obj.prop61 = "test";
            obj.prop62 = "test";
            obj.prop63 = "test";
            obj.prop64 = "test";
            //后续屏蔽以下属性
            obj.prop65 = "test";
            obj.prop66 = "test";


            //console.log(%HasFastProperties(obj));

            var time = new Date().getTime();

            for (var i = 0; i < 10000000; i++) {
                obj["prop1"] = "test2";
            }

            console.log(new Date().getTime() - time);
        }

    }
} 
