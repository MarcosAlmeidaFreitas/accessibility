//classe para testar a acessibilidade através do pacote do @axe-core/react
export async function axeAccessibilityReporter(){
  //se caso a variável node_env for desenvolvimento ele vai executar o processo e se caso existir uma janela,
  // isso pq deve rodar somente do lado do cliente e não do servidor
  if(process.env.NODE_ENV === 'development' && typeof window !== 'undefined'){
    const axe = await require(`@axe-core/react`);
    const react = await require(`react`);
    const reactDOM = await require(`react-dom`);
    
    axe(react, reactDOM, 1000);
  }
}