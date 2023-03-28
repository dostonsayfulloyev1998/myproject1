from  aiogram import Bot,Dispatcher, executor, types
from config import TOKEN_API
import wikipedia

bot = Bot(TOKEN_API)
dp = Dispatcher(bot)
wikipedia.set_lang('uz')

@dp.message_handler(commands=['start'])
async def command_help(message: types.Message):
   if message.text.count(' ')>=1:
      await message.answer(text= message.text)
   else:
       await message.answer(text="hello wolrd")


@dp.message_handler(commands=['help'])
async def command_start(message: types.Message):
      await message.answer(text= "sizga qanday yordam kerak")

@dp.message_handler()
async def command_start(message: types.Message):
     try:
       renpond = wikipedia.summary(message.text)
       await message.answer(renpond)
     except:
         await message.answer("bu mavzuga doir maqola topilmadi!")



if __name__ == '__main__':
 executor.start_polling(dp)
