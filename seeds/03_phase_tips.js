
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phase_tips').del()
    .then(() => {
      // Inserts seed entries
      return knex('phase_tips').insert([
        {
      "id": 1,
      "phase": "Power",
      "exercise_tip": "During the first week of your cycle, estrogen starts out at its lowest point and begins a steady climb. For the first day or so of this phase, the low level of estrogen combined with period-related aches and pains may leave you feeling fatigued. However, as estrogen rises throughout this week, your best days to train hard start two or three days after your period begins up until a couple days before ovulation. Focus your workouts this week on resistance training and power, as rising estrogen levels will help you build more muscle and build it faster.",
      "nutrition_tip": "For some women, the hormone-fueled benefits of week 1 kick in quickly; for others it takes a few days or longer. It depends on your personal sensitivity to hormone fluctuations as well as if you’re eating enough iron-rich foods to make up for iron loss from menstruation. (When iron dips, it can trigger fatigue, fogginess and a down mood.) Rising estrogen also has a slight appetite-suppressing effect, which makes it a bit easier to eat smaller portions and opt for healthier foods."
    },
    {
      "id": 2,
      "phase": "Performance",
      "exercise_tip": "A week after your period begins you'll most likely feel your strongest for about five days, (between days 8 and 12). This is a good time to max your athletic pursuits. Estrogen levels are spiking during this time, helping to prevent injuries and mask pain. Power and resistance exercises are still recommend during this time.",
      "nutrition_tip": "During week 2 you'll tend to be a bit less hungry due to estrogen’s slight appetite-suppressing effect. During ovulation, research shows your appetite drops even further, leading to eating less than during any other time in your cycle. You’ll find it’s also easier to opt for lighter, healthier foods since estrogen increases willpower (boosting your ability to resist temptation) and increases your motivation to reach your goals. High estrogen also makes you braver, more confident and ready for a challenge. You’ll think quickly and learn new facts and skills more easily."
    },
    {
      "id": 3,
      "phase": "Endurance",
      "exercise_tip": "Muscle growth and maintenance is especially difficult during this time, and you may find it harder to perform at your max. On the upside, you’re burning up to 30% more fat when you exercise thanks to the combination of estrogen and progesterone making your body more efficient at using fat for fuel. Bonus: Exercising reduces hormone-triggered water retention by helping you sweat out excess fluid.",
      "nutrition_tip": "Progesterone turns up the catabolism or breakdown of muscle tissue, which makes it more difficult to access amino acids. As a result, you may have higher rates of muscle breakdown during hard workouts. That's why it's particularly important during this phase for women to increase their uptake of protein that's high in leucine, or supplement with branched-chain amino acids, before workouts and within 30 minutes after exercise. Progesterone also sheds sodium from your body, so it's important for women to make sure they're getting enough salt in their diet especially before difficult workouts."
    },
    {
      "id": 4,
      "phase": "Rest",
      "exercise_tip": "Estrogen drops throughout your premenstrual Week 4 and the lower it goes, the more it has the potential to drag down your mood and make you sad, irritable or anxious. While this isn't true for everyone, generally speaking this is a good time in your cycle for an active rest week. Remember, rest is just as important as trying hard.",
      "nutrition_tip": "You need to add more carbs to your system during the premenstrual part of your cycle, especially if you're doing long bouts of intense exercise. This is due to estrogen's affect of lowering your body's carb-burning ability. This is great for endurance activities, but not so helpful for high-intensity training sessions. Bonus: You burn more calories overall during this phase (about a 5-10% uptick in metabolism) which translates to about 100 to 200 additional calories."
    }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('phase_tips_id_seq', (SELECT MAX(id) FROM phase_tips));`
      );
    })
}
