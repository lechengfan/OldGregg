from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response

def index(request):
	context = RequestContext(request)

	context_dict = {'boldmessage': "Wanna Drink Baileys Out of a Shoe?"}
	
	return render_to_response('baileys/index.html', context_dict, context)
