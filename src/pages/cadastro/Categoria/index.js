import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria () {
  const initialValues = {
    name: '',
    desciption: '',
    colorCategory: ''
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    })
  }

  function handleChange(event) {
    console.log("teste"+ event)
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([...categories, values]);
        setValues(initialValues)
      }}>
       
      <FormField
        label="Nome da Categoria"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />

      {/* <FormField
        label="Descrição"
        type="textarea"
        name="description"
        value={values.description}
        onChange={handleChange}
      /> */}

      { 
      <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.desciption}
            name="description"
            onChange={handleChange}
          />
        </label>
      </div> 
      }

      <FormField
        label="Cor"
        type="color"
        name="colorCategory"
        value={values.colorCategory}
        onChange={handleChange}
      />

      <button>
        Cadastrar
      </button>
    </form>

    <ul>
      {categories.map((category, index) => {
        return(
          <li key={`${category}${index}`}>
            {category.name}
          </li>
        )
      })}
    </ul>

    <Link to="/">
      Ir para home
    </Link>
  </PageDefault>
)}

export default CadastroCategoria