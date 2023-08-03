import { Container, Links,Content } from "./styles"

import { Tag } from "../../components/Tag"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/section"
export function Details(){

  return (
    <Container>
      <Header />
      <main>
        <Content>

        
  <ButtonText title="Links úteis" />

  <h1>
    Introdução ao React
  </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a tempora cupiditate mollitia ullam quos sunt fugit. Enim esse, numquam ad ducimus eos, praesentium id ea culpa cum, aspernatur hic?
    Dolor veniam quibusdam cum explicabo voluptatum nihil assumenda, libero, dignissimos laborum doloremque facere eos ratione optio accusamus nam nemo neque maxime fugiat velit ut quos esse? Laudantium voluptas libero molestiae!
    Magnam tempora quod vero corrupti repellendus cupiditate error dolorem quo esse distinctio vel accusamus omnis minima ratione maxime cum, vitae, molestias quam voluptates quibusdam quasi rerum sint autem suscipit? Dolorum!
  </p>

      <Section title = "Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

    <Section title="Marcadores">
      <Tag title="express"/>
      <Tag title="nodejs"/>
    </Section>

      <Button title = "Voltar"/>
      </Content>
      </main>
    </Container>
  )
}

