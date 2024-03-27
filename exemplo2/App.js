/*import React from "react";
import {View, Text} from "react-native";

function App () {

return {
  <View>
      <Text> Olá mundo! </Text>
  </View>

};

}

export default App;//função padrão que irá ser chamada no inicio 

// pode usar tambem export function App () {
}*/

//usa classes obrigatorio ter um render( redenrizar na tela) é pode criar várias
import React, {Component}  from "react";
import { View, Text, Image} from "react-native"; //react-native= smartphone. View (div do html)= tela 

class App extends Component { //pega herança da classe component
  render(){
    let curso ="INFO";

    return (// retorna para a tela

// desenho da tela, tem compomentes flex
      <View> 
          <Text> Olá mundo! </Text>
          <Text> Exemplo! </Text>
          <Text style= {{color: 'blue', fontSize: 30, margin: 15}}> Meu exemplo </Text>  
          {/* style formata */}
          {/* tela adaptval = % 
          fixo na tela- pixel*/}

          <Image source= {{uri: 'color a url aqui'}} style= {{width: 300, height: 300}}/> 
        {/* Image é obrigado a informar a largura e altura */} 
        {/* imagem-> url da web em https com o link */}


        <Text> {curso } </Text>
        {/* entre {} é variavel */}

        {/* para cjamar o componente */}
        {/* <MinhaImagem> */}
        {/* Passando propriedades a Largura e a Altura */}
        {/* <MinhaImagem largura={400} altura={400}  nome="Imagem 1" */}
      </View>

     
    );
  }
}
// para a imagem tem que ter o https
export default App;

