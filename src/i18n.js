import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    navbar: {
                        home: 'Home',
                        createRecipe: 'Create Recipe',
                        recipes: 'Recipes',
                        menu: 'Menu'
                    },
                    home: {
                        title: 'Welcome to Recipe Master!',
                        description: 'Discover new and exciting recipes, save your favorites, and share your own creations with the world!',
                        get_started: 'Get Started',
                        add_recipe: 'Add a Recipe',
                        features_title: 'Discover the Features',
                        feature_discover: '🍲 Discover New Recipes',
                        feature_discover_description: 'Browse through a wide collection of recipes from around the world. Find inspiration for your next meal!',
                        feature_share: '🧑‍🍳 Share Your Creations',
                        feature_share_description: 'Upload and share your favorite recipes with others. Let the world taste your best dishes!',
                        feature_save: '🌟 Save Your Favorites',
                        feature_save_description: 'Create a personal collection of recipes you love and want to make again. Never lose track of a great recipe!',
                        ready_to_cook: 'Ready to Cook?',
                        join_community: 'Join our community and start exploring delicious recipes today!',
                        explore_recipes: 'Explore Recipes'
                    },
                    recipes: {
                        title: 'Recipes',
                        filterPublic: 'Public',
                        filterPrivate: 'Private',
                        seeMore: 'See more',
                        ingredients: 'Ingredients',
                        noRecipes: "No recipes available. Please add a recipe!",
                    },
                    createRecipe: {
                        title: 'Create your Recipe',
                        chooseImage: 'Choose Image',
                        titleLabel: 'Title',
                        descriptionLabel: 'Description',
                        ingredientLabel: 'Ingredient',
                        addIngredient: 'Add',
                        instructions: 'Instructions',
                        addInstruction: 'Add Instruction',
                        public: 'Public',
                        private: 'Private',
                        create: 'Create',
                        validation: {
                            titleRequired: 'Title is required.',
                            descriptionRequired: 'Description is required.',
                            ingredientRequired: 'Ingredient cannot be empty.',
                            instructionRequired: 'Instruction cannot be empty.',
                            atLeastOneIngredient: 'At least one ingredient is required.',
                            atLeastOneInstruction: 'At least one instruction is required.'
                        }
                    },
                    recipeDetails: {
                        loading: 'Loading...',
                        notFound: 'Recipe not found',
                        createdBy: 'Created by:',
                        ingredients: 'Ingredients',
                        instructions: 'Instructions',
                        noInstructions: 'No instructions provided.'
                    },
                    errorPage: {
                        title: 'Oh no!',
                        description: 'Something went wrong.',
                        message: 'An unexpected error occurred.',
                        go_home: 'Go to Homepage'
                    },
                    auth: {
                        signIn: 'Sign In',
                        logout: 'Logout'
                    }
                }
            },
            pl: {
                translation: {
                    navbar: {
                        home: 'Główna',
                        createRecipe: 'Stwórz Przepis',
                        recipes: 'Przepisy',
                        menu: 'Menu'
                    },
                    home: {
                        title: 'Witamy w Recipe Master!',
                        description: 'Odkrywaj nowe i ekscytujące przepisy, zapisuj ulubione i dziel się swoimi kreacjami ze światem!',
                        get_started: 'Zacznij',
                        add_recipe: 'Dodaj Przepis',
                        features_title: 'Odkryj Funkcje',
                        feature_discover: '🍲 Odkrywaj Nowe Przepisy',
                        feature_discover_description: 'Przeglądaj szeroką kolekcję przepisów z całego świata. Znajdź inspirację na kolejny posiłek!',
                        feature_share: '🧑‍🍳 Dziel się Swoimi Kreacjami',
                        feature_share_description: 'Przesyłaj i dziel się swoimi ulubionymi przepisami z innymi. Niech świat spróbuje twoich najlepszych dań!',
                        feature_save: '🌟 Zapisz Ulubione',
                        feature_save_description: 'Stwórz osobistą kolekcję przepisów, które kochasz i chcesz powtórzyć. Nigdy nie zgub świetnego przepisu!',
                        ready_to_cook: 'Gotowy do Gotowania?',
                        join_community: 'Dołącz do naszej społeczności i zacznij odkrywać pyszne przepisy już dziś!',
                        explore_recipes: 'Przeglądaj Przepisy'
                    },
                    recipes: {
                        title: 'Przepisy',
                        filterPublic: 'Publiczny',
                        filterPrivate: 'Prywatny',
                        seeMore: 'Zobacz więcej',
                        ingredients: 'Składniki',
                        noRecipes: "Brak dostępnych przepisów. Dodaj nowy przepis!",
                    },
                    createRecipe: {
                        title: 'Stwórz swój przepis',
                        chooseImage: 'Wybierz zdjęcie',
                        titleLabel: 'Tytuł',
                        descriptionLabel: 'Opis',
                        ingredientLabel: 'Składnik',
                        addIngredient: 'Dodaj',
                        instructions: 'Instrukcje',
                        addInstruction: 'Dodaj instrukcję',
                        public: 'Publiczny',
                        private: 'Prywatny',
                        create: 'Utwórz',
                        validation: {
                            titleRequired: 'Tytuł jest wymagany.',
                            descriptionRequired: 'Opis jest wymagany.',
                            ingredientRequired: 'Składnik nie może być pusty.',
                            instructionRequired: 'Instrukcja nie może być pusta.',
                            atLeastOneIngredient: 'Przynajmniej jeden składnik jest wymagany.',
                            atLeastOneInstruction: 'Przynajmniej jedna instrukcja jest wymagana.'
                        }
                    },
                    recipeDetails: {
                        loading: 'Ładowanie...',
                        notFound: 'Nie znaleziono przepisu',
                        createdBy: 'Utworzony przez:',
                        ingredients: 'Składniki',
                        instructions: 'Instrukcje',
                        noInstructions: 'Brak instrukcji.'
                    },
                    errorPage: {
                        title: 'O nie!',
                        description: 'Coś poszło nie tak.',
                        message: 'Wystąpił nieoczekiwany błąd.',
                        go_home: 'Wróć do strony głównej'
                    },
                    auth: {
                        signIn: 'Zaloguj się',
                        logout: 'Wyloguj się'
                    }
                }
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

export default i18n;
