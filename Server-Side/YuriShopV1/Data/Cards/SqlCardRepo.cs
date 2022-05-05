using System;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Cards
{
    public class SqlCardRepo : ICardRepo
    {
        private readonly YuriShopContext _context;

        public SqlCardRepo(YuriShopContext context)
        {
            _context = context;
        }
        public Card GetCardByShopId(int id)
        {
            return _context.Card.FirstOrDefault(p => p.ShopRefId == id);
        }

        public Card GetCardByUserId(int id)
        {
            return _context.Card.FirstOrDefault(p => p.UserRefId == id);
        }

        public void CreateCard(Card card)
        {
            if (card == null)
            {
                throw new ArgumentNullException(nameof(card));
            }
            _context.Card.Add(card);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateCard(Card card)
        {
            if (card == null)
            {
                throw new ArgumentNullException(nameof(card));
            }
            _context.Card.Update(card);
        }
    }
}
