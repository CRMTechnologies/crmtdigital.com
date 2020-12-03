exports.handler = function (event, context, callback) {
	const body = JSON.parse(event.body);
	
	var recommendations = new Array(); 
	var numRecs = 0;

	// Tech Stack Recommendation
	if( body.NurtureCampaigns != "Yes" ) { recommendations.push({ title: "Nurture Campaigns", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}
	else if( body.EventCampaigns != "Yes" ) { recommendations.push({ title: "Event Campaigns", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}	
	else if( body.InboundCampaigns != "Yes" ) { recommendations.push({ title: "Inbound Campaigns", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}		
	else if( body.AccountBasedMarketing != "Yes" ) { recommendations.push({ title: "Account Based Marketing", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}	
	else if( body.ConversationalMarketing != "Yes" ) { recommendations.push({ title: "Conversational Marketing", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-cogs" });	}
	
	// Marketing Recommendation
	if( body.AutoResponderEmails != "Yes" ) { recommendations.push({ title: "Auto-Responder Emails", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-sticky-note" });	}		
	else if( body.ProgressiveProfiling != "Yes" ) { recommendations.push({ title: "Progressive Profiling", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-sticky-note" });	}
	else if( body.SharedContentSnippets != "Yes" ) { recommendations.push({ title: "Shared Content Snippets", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-sticky-note" });	}		
	else if( body.DigitalAdvertising != "Yes" ) { recommendations.push({ title: "Use Digital Advertising in Nurture Campaigns", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-sticky-note" });	}	
	else if( body.VirtualEventRegistration != "Yes" ) { recommendations.push({ title: "Virtual Event Registration", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-sticky-note" });	}	

	// Ops Recommendation
	if( body.DataNormalisation != "Yes" ) { recommendations.push({ title: "Data Normalisation", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}		
	else if( body.DataDeduplication != "Yes" ) { recommendations.push({ title: "Data Deduplication", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}
	else if( body.LeadtoAccountMatching != "Yes" ) { recommendations.push({ title: "Lead to Account Matching", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}		
	else if( body.LeadScoring != "Yes" ) { recommendations.push({ title: "Lead Scoring", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}
	else if( body.CentralCustomerDatabase != "Yes" ) { recommendations.push({ title: "Central Customer Database", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}
	else if( body.LeadRouting != "Yes" ) { recommendations.push({ title: "Lead Routing", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}
	else if( body.AccountScoring != "Yes" ) { recommendations.push({ title: "Account Scoring", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-chart-line" });	}
	
	// Process Recommendation
	if( body.ConsentManagement != "Yes" ) { recommendations.push({ title: "Consent Management", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-users" });	}		
	else if( body.CampaignRequestProcesses != "Yes" ) { recommendations.push({ title: "Campaign Request Processes", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-users" });	}
	else if( body.DataUploads != "Yes" ) { recommendations.push({ title: "Data Uploads", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-users" });	}		
	else if( body.CampaignBuildProcesses != "Yes" ) { recommendations.push({ title: "Campaign Build Processes", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-users" });	}	
	else if( body.CampaignHierarchy != "Yes" ) { recommendations.push({ title: "Campaign Hierarchy", teaser: "In a world with increasingly strong data protection laws, nurture campaigns need to become multi-channel. Use re-targeting and paid advertising to drive nurture audiences to your content.", icon: "fa-users" });	}	
  
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(recommendations)
	})

}
