export const esvalido = (e)=>
{
    e.preventDefault()
    console.log(e.target.children);
    
    const campos = [...e.target].filter ((elemento) => {
        return elemento.hasAttribute('required')
    });

    campos.forEach(campo => 
        {
            console.log(campo);
            if (campo.value === "") {
                campo.classList.add("error")
            }

            console.log(campo.selectedIndex);
            
        });
    
    
}
