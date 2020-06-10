using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace signalrApp.hubs
{
    public class chatHub:Hub
    {
        public async Task SendMessage(string FromUser, string message) {


            await Clients.All.SendAsync("RecivedMessage", FromUser, message);
        
        }
    }
}
