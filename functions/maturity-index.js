exports.handler = function (event, context, callback) {
	const body = JSON.parse(event.body);
	
	var recommendations = new Array(); 
	var numRecs = 0;

	// Tech Stack Recommendation
	if( body.NurtureCampaigns != "Yes" ) { recommendations.push({ title: "Nurture Campaigns", teaser: "", icon: "fa-cogs" });	}
	else if( body.EventCampaigns != "Yes" ) { recommendations.push({ title: "Event Campaigns", teaser: "", icon: "fa-cogs" });	}	
	else if( body.InboundCampaigns != "Yes" ) { recommendations.push({ title: "Inbound Campaigns", teaser: "", icon: "fa-cogs" });	}		
	else if( body.AccountBasedMarketing != "Yes" ) { recommendations.push({ title: "Account Based Marketing", teaser: "", icon: "fa-cogs" });	}	
	else if( body.ConversationalMarketing != "Yes" ) { recommendations.push({ title: "Conversational Marketing", teaser: "", icon: "fa-cogs" });	}
	
	// Marketing Recommendation
	if( body.AutoResponderEmails != "Yes" ) { recommendations.push({ title: "Auto-Responder Emails", teaser: "", icon: "fa-cogs" });	}		
	else if( body.ProgressiveProfiling != "Yes" ) { recommendations.push({ title: "Progressive Profiling", teaser: "", icon: "fa-cogs" });	}
	else if( body.SharedContentSnippets != "Yes" ) { recommendations.push({ title: "Shared Content Snippets", teaser: "", icon: "fa-cogs" });	}		
	else if( body.DigitalAdvertising != "Yes" ) { recommendations.push({ title: "Use Digital Advertising in Nurture Campaigns", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}	
	else if( body.VirtualEventRegistration != "Yes" ) { recommendations.push({ title: "Virtual Event Registration", teaser: "", icon: "fa-cogs" });	}	

	// Ops Recommendation
	if( body.DataNormalisation != "Yes" ) { recommendations.push({ title: "Data Normalisation", teaser: "", icon: "fa-cogs" });	}		
	else if( body.DataDeduplication != "Yes" ) { recommendations.push({ title: "Data Deduplication", teaser: "", icon: "fa-cogs" });	}
	else if( body.LeadtoAccountMatching != "Yes" ) { recommendations.push({ title: "Lead to Account Matching", teaser: "", icon: "fa-cogs" });	}		
	else if( body.LeadScoring != "Yes" ) { recommendations.push({ title: "Lead Scoring", teaser: "", icon: "fa-cogs" });	}
	else if( body.CentralCustomerDatabase != "Yes" ) { recommendations.push({ title: "Central Customer Database", teaser: "", icon: "fa-cogs" });	}
	else if( body.LeadRouting != "Yes" ) { recommendations.push({ title: "Lead Routing", teaser: "", icon: "fa-cogs" });	}
	else if( body.AccountScoring != "Yes" ) { recommendations.push({ title: "Account Scoring", teaser: "", icon: "fa-cogs" });	}
	
	// Process Recommendation
	if( body.ConsentManagement != "Yes" ) { recommendations.push({ title: "Consent Management", teaser: "", icon: "fa-cogs" });	}		
	else if( body.CampaignRequestProcesses != "Yes" ) { recommendations.push({ title: "Campaign Request Processes", teaser: "", icon: "fa-cogs" });	}
	else if( body.DataUploads != "Yes" ) { recommendations.push({ title: "Data Uploads", teaser: "", icon: "fa-cogs" });	}		
	else if( body.CampaignBuildProcesses != "Yes" ) { recommendations.push({ title: "Campaign Build Processes", teaser: "", icon: "fa-cogs" });	}	
	else if( body.CampaignHierarchy != "Yes" ) { recommendations.push({ title: "Campaign Hierarchy", teaser: "", icon: "fa-cogs" });	}	
  
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(recommendations)
	})

}
