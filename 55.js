function GetTreeData(data) {
    let TreeData = [];
    let map = new Map(); //存在id,对应所在的内存地址
    let outputObj, pid;
    for (let i = 0; i < data.length; i++) {
        pid = data[i].pid;
        if (map.has(pid)) {
            //存在，将些信息，加入到对应id=pid的对象上的children
            if (!map.get(pid).childrens)
                map.get(pid).childrens = [];
            let obj = new Object(data[i]);
            map.get(pid).childrens.push(obj);
            //通过pid在Map中查找，并将当前对象，加入到对应的childres属性
            map.set(data[i].id, obj);
            //重点(必须也加入Map)：将当前id及对应的对象，存入Map对象中
        } else if (!map.has(pid) && pid == 0) {
            //这里处理pid不存在，且pid 为0的处理，pid不存在，且不为0的，程序不考虑这种情况
            outputObj = new Object(data[i]);
            //加入到要返回的数组中
            TreeData.push(outputObj);
            //将id添加到Map中
            map.set(data[i].id, outputObj);

        }
    }
    return TreeData;
}

//树形结构转化为扁平结构
// function flattTree(data){
//     let res=[]//保存最后的数据
//
//     data.forEach(el=>{
//         if(el.children){
//             res.push(el)//当前父亲肯定要push到res里面的 是要把孩子删除了吗再
//
//             //第二层循环，发现这是重复的地方，使用递归了在这个点
//             el.children.forEach(item=>{
//                 if(item.children){
//                     res.push(item)
//                 }else{
//                     res.push(el.children)
//                 }
//             })
//         }else{
//             res.push(el)
//         }
//     })
//     console.log(res,'未使用递归的时候的粗糙的代码');
// }