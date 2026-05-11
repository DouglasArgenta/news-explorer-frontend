import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src="/author.png" alt="Autor" className="about__image" />

        <div className="about__content">
          <h2 className="about__title">Sobre o autor</h2>

          <p className="about__text">
            Este projeto foi desenvolvido como parte do aprendizado em
            desenvolvimento web. Aqui você pode buscar notícias sobre qualquer
            tema e salvar os artigos que achar mais interessantes.
          </p>

          <p className="about__text">
            Sou desenvolvedor focado em criar aplicações modernas e funcionais,
            utilizando tecnologias como React, JavaScript e boas práticas de
            interface e experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
