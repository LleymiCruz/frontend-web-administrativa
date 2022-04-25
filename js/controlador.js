function generarCategorias() {
    var stringHTML='';
    $.ajax({
        url:'../Backend/api/categorias.php',
        method:'get',
        data:'',
        dataType:'json',
        success:function(categorias){
            categorias.forEach(categoria => {
                stringHTML+=
                `<div id="${categoria.nombreCategoria}" class=" my-2 mx-auto div-categoria">
                <div style="background-color: #5A993C; border-radius: 50px 50px 0px 0px" class="fs-3 fw-bold ">${categoria.nombreCategoria}</div>`
                let Empresas='';
                $.ajax({
                    url:'../Backend/api/empresas.php?idCategoria='+categoria.idCategoria,
                    method:'get',
                    data:'',
                    dataType:'json',
                    success:function(empresas){
                        console.log(empresas);
                        empresas.forEach(empresa => {
                           document.getElementById(categoria.nombreCategoria).innerHTML+=
                            `<div class="row p-2">
                                <div class="col-4">
                                    <img class="col-12"  src="${empresa.logo}" alt="">
                                </div>
                                <div class="text-start fs-5 fw-bold col-8 my-auto">${empresa.nombreEmpresa}</div>
                            </div>`
                            

                            
                        });
                        
                        
                    },
                    error:function (error) {
                        console.error(error);
                        
                    }
            
                });
                stringHTML+=`</div>`
                document.getElementById('categorias').innerHTML=stringHTML;
               
              
            });
            
           
            console.log(categorias)
        },
        error:function (error) {
            console.error(error);
            
        }

    });
    
}
generarCategorias() ;
function llenarSelectCategorias(){
    document.getElementById('selectCategorias').innerHTML='';
    $.ajax({
        url:'../Backend/api/categorias.php',
        method:'get',
        data:'',
        dataType:'json',
        success:function(categorias){
            categorias.forEach(categoria => {
                document.getElementById('selectCategorias').innerHTML+=
             `<option value="${categoria.idCategoria}" >${categoria.nombreCategoria}</option>`
                
            });
 
        },
        error:function (error) {
            console.error(error);
            
        }

    });

}
llenarSelectCategorias();
function generarEmpresasSelect() {
    console.log( document.getElementById('selectCategorias').value);
    document.getElementById('selectEmpresas').innerHTML='';
    $.ajax({
        url:'../Backend/api/empresas.php?idCategoria='+document.getElementById('selectCategorias').value,
        method:'get',
        data:'',
        dataType:'json',
        success:function(empresas){
            console.log(empresas);
            empresas.forEach(empresa => {
               document.getElementById('selectEmpresas').innerHTML+=
               ` <option value="${empresa.idEmpresa}">${empresa.nombreEmpresa}</option>`
                
                

                
            });
            
            
        },
        error:function (error) {
            console.error(error);
            
        }

    });

    
}