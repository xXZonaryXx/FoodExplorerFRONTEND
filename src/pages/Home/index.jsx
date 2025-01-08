import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Banner, Container, Content, SliderWrapper } from './styles';
import { MdOutlineSearchOff } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Slider } from '../../components/Slider';
import { api } from '../../services/api';
import { useSearch } from '../../hooks/search';

export function Home() {
  const [dishes, setDishes] = useState();
  const [categories, setCategories] = useState([]);
  const { searchValue, setSearch } = useSearch();
  const query = searchValue === undefined ? '' : searchValue;

  async function fetchDishes() {
    try {
      const { data } = await api.get(`/dishes?search=${query}`);
      setDishes(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get(`/categories`);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchDishes();
  }, []);

  useEffect(() => {
    fetchDishes();
  }, [searchValue]);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
      </motion.div>

      <Content>
        <Banner>
          <motion.div
            className="banner-wrapper"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="banner-content">
              <div className="banner-img"></div>
              <motion.h3
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Sabores inigualáveis
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Sinta o cuidado do preparo com ingredientes selecionados.
              </motion.p>
            </div>
          </motion.div>
        </Banner>

        {categories.map((category) => (
          <motion.div
            key={`category:${category.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Slider title={category.name}>
              {dishes &&
                dishes
                  .filter((dish) => dish.categoryId === category.id)
                  .map((dish, id) => (
                    <motion.div
                      key={`dish:${dish.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: id * 0.1, duration: 0.4 }}
                    >
                      <Card dish={dish} url={`/dish/${dish.id}`} />
                    </motion.div>
                  ))}
            </Slider>
          </motion.div>
        ))}
      </Content>

      <Footer />
    </Container>
  );
}
