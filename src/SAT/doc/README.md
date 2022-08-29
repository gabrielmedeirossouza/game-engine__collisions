# SAT - Separation Axis Theorem

SAT detecta colisões entre qualquer [OBB](#obb) e funciona com qualquer [polígono](#poligons-definition) [convexo](#poligons-definition), ou seja, qualquer polígono independênte de sua rotação, irá ser detectado.

> É possível fazer a deteção também entre polígono e círculo

O algoritmo SAT nos diz que, **se pelo menos um eixo separa** ambas as formas (polígonos), então podemos dizer com certeza que eles **não** estão colidindo.

![](SAT-definition.png)

> Apenas falando é fácil e óbvio identificar que as formas não estão colidindo e que estão separadas pelo eixo (tracejado vermelho), porém temos que calcular via código onde vai estar esse eixo para aplicar essa técnica.

## Definições
<details>
<summary id="obb">OBB</summary>
<br />

OBB - Oriented Bounding Boxes | Caixas que podem estar rotacionadas/não orientadas em seu eixo.

![](OBB.png)

---

</details>


<details>
<summary id="poligons-definition">Polígonos</summary>
<br />

É uma linha fechada inteiramente formada por segmentos de reta que não se cruzam, exceto em suas extremidades.

Note na figura abaixo que apenas o último desenho da direita é um polígono, pois o primeiro não está fechado e o segundo seus **segmentos de reta** se cruzam:

> **Segmento de reta**: Uma linha que é limitada por dois pontos, A e B.

![](polygon.png)

### Polígonos convexos e não convexos

Um polígono é chamado convexo quando, dados os pontos A e B em seu interior, o segmento AB está totalmente contido no interior do polígono, independentemente da posição dos pontos AB. Dessa forma, é impossível encontrar dois pontos AB no interior do polígono, de modo que pelo menos um ponto do segmento AB esteja no exterior desse polígono.

No caso de encontrar, pelo menos, um segmento AB com ao menos um ponto no **exterior do polígono**, então essa figura é chamada *não convexa*.

![](convex__not-convex.png)

---

</details>
