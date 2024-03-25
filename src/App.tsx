import './App.css';
import BasicSelect from './lib/Select/BasicSelect';

function App() {

  const selectData = {
    isOpen: true, // Example prop values
    focused: false,
    value: '',
    disabled: false,
    placeholder: 'Select',
    options: ['Option 1', 'Option 2', 'Option 3']
  }

  return (
    <>
      <BasicSelect
      value={
        <BasicSelect.Value value={selectData.value} placeholder={selectData.placeholder}/>
      }
      options={
        <BasicSelect.Options options={selectData.options} selectedValue={selectData.value} />
      }
      />
    </>
  )
}

export default App
