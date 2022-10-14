function a(){
    let name1 = 'asd'
    function b(){
        let name2 = 'asd'
        function c(){
            let name3 = 'asd'
            function d(){
                let name4 = 'asd'
            }
            d();
        }
        c()
    }
    b()
}
a()