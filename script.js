class Cat {
    constructor(breed, age, gender, furColor, nickname, photoLink, isSleeping = false) {
      this.breed = breed;
      this.age = age;
      this.gender = gender;
      this.furColor = furColor;
      this.nickname = nickname;
      this.photoLink = photoLink;
      this.isSleeping = isSleeping;
    }
  
    askForFood() {
      if (!this.isSleeping) {
        console.log(`${this.nickname} мяукает и просит есть!`);
      } else {
        console.log(`${this.nickname} спит и не может просить есть.`);
      }
    }
  
    goToSleep() {
      this.isSleeping = true;
      console.log(`${this.nickname} лег спать.`);
    }
  
    wakeUp() {
      this.isSleeping = false;
      console.log(`${this.nickname} проснулся.`);
    }
  }
  
  // Створення 3-4 котів
  const cat1 = new Cat("Абиссинская", 7, "male", "рыжий", "Рыжик", "cat1.jpg");
  const cat2 = new Cat("Сомалийская", 5, "female", "рыжий", "Мурка", "cat2.jpg");
  const cat3 = new Cat("Персидская", 10, "female", "серый", "Пухнастик", "cat3.jpg.jpg");
  const cat4 = new Cat("Британская короткошерстная", 3, "male", "голубой", "Барсик", "cat4.jpg.jpg");
  
  // Массив котов
  const cats = [cat1, cat2, cat3, cat4];
  
  // Переменная для отслеживания текущего кота
  let currentCatIndex = 0;
  
  // Функция для обновления информации о коте
  function updateCatInfo() {
    const cat = cats[currentCatIndex];
    const catInfoElement = document.getElementById("cat-info");
    catInfoElement.innerHTML = `
      <h2>${cat.nickname}</h2>
      <img src="${cat.photoLink}" alt="${cat.nickname} photo">
      <p>Порода: ${cat.breed}</p>
      <p>Возраст: ${cat.age}</p>
      <p>Пол: ${cat.gender}</p>
      <p>Цвет шерсти: ${cat.furColor}</p>
      <p>Спит: ${cat.isSleeping}</p>
    `;
  }
  
  // Функция для переключения на следующего кота
  function nextCat() {
    currentCatIndex = (currentCatIndex + 1) % cats.length;
    updateCatInfo();
  }
  
  // Функция для переключения на предыдущего кота
  function previousCat() {
    currentCatIndex = (currentCatIndex - 1) % cats.length;
    updateCatInfo();
  }