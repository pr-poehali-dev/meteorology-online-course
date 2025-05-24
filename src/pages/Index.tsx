import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600/90 to-indigo-700/90 text-white py-20 overflow-hidden">
        {/* Background map */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/files/d933f743-e919-4c53-887b-fd67f58c5900.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-700/70" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 font-montserrat">
              Авиационная Метеорология
            </h1>
            <p className="text-xl mb-8 opacity-90 font-open-sans">
              Профессиональный курс от авиационного метеоролога. Изучите
              прогнозирование погоды для безопасных полетов за 2 дня
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                ✈️ 25 уроков
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                ⏱️ 2 дня
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                🎯 Интерактивный тренажер
              </Badge>
            </div>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Записаться за 500₽
            </Button>
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍✈️</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 font-montserrat">
                  Ваш преподаватель
                </h2>
                <p className="text-lg text-gray-600 mb-4 font-open-sans">
                  <strong className="text-blue-600">
                    Авиационный метеоролог
                  </strong>{" "}
                  с многолетним опытом работы в аэропортах и метеослужбе.
                </p>
                <p className="text-gray-600 mb-6 font-open-sans">
                  Специализируется на прогнозировании авиационной погоды,
                  анализе метеоусловий для безопасности полетов и подготовке
                  специалистов авиационной отрасли.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-300"
                  >
                    Авиационная метеорология
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-300"
                  >
                    Прогнозирование
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-300"
                  >
                    Безопасность полетов
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            Программа курса
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📚</span>
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Теоретическая база
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Основы атмосферной физики и метеорологии
                </CardDescription>
              </CardHeader>
              <CardContent className="font-open-sans">
                <ul className="space-y-2 text-gray-600">
                  <li>• Структура атмосферы</li>
                  <li>• Метеорологические элементы</li>
                  <li>• Синоптические карты</li>
                  <li>• Авиационные коды</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Практические навыки
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Работа с реальными данными и прогнозами
                </CardDescription>
              </CardHeader>
              <CardContent className="font-open-sans">
                <ul className="space-y-2 text-gray-600">
                  <li>• Анализ погодных карт</li>
                  <li>• Составление прогнозов</li>
                  <li>• Оценка видимости</li>
                  <li>• Прогноз турбулентности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">✈️</span>
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Авиационная специфика
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Особенности метеорологии в авиации
                </CardDescription>
              </CardHeader>
              <CardContent className="font-open-sans">
                <ul className="space-y-2 text-gray-600">
                  <li>• Метеоминимумы аэродромов</li>
                  <li>• Опасные явления</li>
                  <li>• Полетная документация</li>
                  <li>• Принятие решений</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Simulator */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-montserrat">
            Интерактивный тренажер
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto font-open-sans">
            Отрабатывайте навыки на реальных метеорологических ситуациях.
            Анализируйте данные, составляйте прогнозы и принимайте решения в
            безопасной виртуальной среде.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌦️</span>
              </div>
              <h3 className="font-semibold mb-2 font-montserrat">
                Реальные сценарии
              </h3>
              <p className="text-sm opacity-80 font-open-sans">
                Работа с архивными данными и реальными погодными условиями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2 font-montserrat">
                Анализ результатов
              </h3>
              <p className="text-sm opacity-80 font-open-sans">
                Детальная обратная связь по каждому решению
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2 font-montserrat">Сертификат</h3>
              <p className="text-sm opacity-80 font-open-sans">
                Получите сертификат о прохождении курса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 font-montserrat">
            Начните обучение сегодня
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">
                  Полный курс
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Авиационная метеорология за 2 дня
                </CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  500₽
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left font-open-sans">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>25 интерактивных уроков</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Доступ к тренажеру</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Сертификат о прохождении</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Пожизненный доступ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Поддержка преподавателя</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 rounded-lg transition-all hover:scale-105"
                  size="lg"
                >
                  Купить курс за 500₽
                </Button>
                <p className="text-sm text-gray-500 font-open-sans">
                  30-дневная гарантия возврата средств
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
