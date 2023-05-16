        /* c case 
        int add(int a, int b){
            return a + b;
        }*/
        function add(a,b){
            return a + b;
        }
        function lastNum(step, limit){
            let sum = 0;
            for(i = 0; i <limit ; i +=step){
                sum += i;
                if(sum >= limit)
                    break;
            }
            // 마지막 더한수
            return i;
        }