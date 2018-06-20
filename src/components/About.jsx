import React from 'react'
import './css/about.css'
import { Item } from 'semantic-ui-react'

export default function About () {
      return (
      <div className="container-about">
              <Item.Image src='img/natali_2.jpg' className="about-photo"/>
              <Item.Content className="about-text">
                  <Item.Description className="about-desc">
                      <p>
                          Здраствуйте. Я Щукина Наталья, художник-керамист, скульптор, мастер фаянса
                      </p>
                      <p>
                          Занимаюсь фаянсовой скульптурой уже 15 лет. Веду активную выставочную деятельность.
                          Являюсь постоянным участником выставок музея города Конаково, выставлялась в антикварном салоне ЦДХ,
                          участвовала на международном аукционе Русского искусства MacDougall’s в Лондоне.
                          Большинство моих работ находятся в частных коллекциях,
                          а так же являются экспонатами Конаковского Краеведческого музея.
                      </p>
                      <p>
                          В своих работах я продолжаю традиции всемирно известного, основанного в 1809 году,
                          Кузнецовского (Конаковского) фаянса. Основные темы моих работ - жанровые сцены из жизни
                          простого народа, фольклорные и литературные персонажи, скульптуры с изображением кумиров,
                          писателей, животных и т.д.
                      </p>
                      <p>
                          Специализируюсь на скульптуре, но так же создаю предметы интерьера: настенные блюда,
                          панно, вазы, декоративную посуду (раковницы, икорницы, пепельницы, шашлычницы).
                          Также есть опыт выполнения реставрационных работ и создания реплик для музея.
                          Все работы уникальны, выполнены авторским тиражом либо в единственном экземпляре.
                      </p>
                  </Item.Description>
                  <div className="container-press">
                      <Item.Header as='h3'>Пресса</Item.Header>
                      <ul>
                          <li>
                              <p>
                                  <a href="http://www.konakovobiblioteka.ru/index.php/mastera-konakovskogo-fayansa/793-master-fayansa-natalya-shchukina"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="press-link">
                                      Юбилейная выставка конаковского скульптура Натальи Щукиной
                                  </a>
                              </p>
                          </li>
                          <li>
                              <p>
                                  <a href="https://tvernews.ru/news/164986/"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="press-link">
                                      Фаянсовая скульптура "Банька" конаковской художницы была продана <br/> почти
                                      за 3 000 фунтов на аукционе в Лондоне
                                  </a>
                              </p>
                          </li>
                      </ul>
                  </div>
              </Item.Content>

          </div>
      );
    }
    
    