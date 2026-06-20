---
title: AsciiDoc Modernization Program
description: Migrating AWS service docs from XML to AsciiDoc, unblocking contributors and AI workflows. From ROSA to EKS, SAP on AWS, and high-compliance regions.
section: documentation-strategy
order: 10
---

Much of AWS service documentation ran on a legacy XML format that only specialists could contribute to easily. I led a multi-year program to modernize that content to AsciiDoc, a lightweight, markdown-like format that lowered the contribution barrier for engineers, product managers, and partners and made content more digestible for LLMs and humans. The work started with ROSA and expanded into a repeatable pattern for other AWS documentation teams. The judgment thesis behind the AI-assisted side of this work is the subject of my blog post, [Where the Script Stops and the Judgment Starts](/blog/where-the-script-stops/). I ran the program alongside my ROSA and EVS documentation work, sequencing across those concurrent workstreams with a [Documentation Prioritization Framework](/case-studies/systems-strategy/rosa-doc-prioritization/).

## The challenge

The XML format was feature-rich but required specialized tooling knowledge, which kept engineers, product managers, and external partners from contributing easily. Services without dedicated writer headcount had no practical way to maintain content without specialist support. The same complexity also made the content a poor fit for AI-assisted workflows: syntax-heavy markup increased token use, made tranformations more expensive to run, and gave models more structure to preserve without adding customer-facing meaning. AWS needed a lightweight, contribution-friendly format that met production requirements and was token-efficient for AI-assisted workflows.

## A pilot-driven rollout

I ran the program as a pilot that expanded by proving value at each step:

- **ROSA.** Researched and proposed AsciiDoc, established ROSA as the first AsciiDoc pilot for AWS documentation, and built a framework for safe contributions from PMs and engineers. ROSA has stayed in AsciiDoc since.
- **EKS.** Supported the EKS team's adoption with conversion testing, troubleshooting, and authoring best-practices documentation. I also collaborated with the platform engineering team to add XML entity support for AsciiDoc so standard AWS entities carried over. EKS non-writer contributions to documentation rose about 25% after adoption.
- **SAP on AWS.** Converted six guides and set up a self-service model so the team maintains its own content, with review gates preserving quality.
- **Regulated and air-gapped regions (later 2025).** Converted hundreds of files, including more than 296 in a single quarter, with human-in-the-loop validation for compliance and technical accuracy.

## AI-assisted conversion tooling

I built Python transformation scripts (Cline + Claude) to convert XML into AsciiDoc at scale. The tooling included an XML-entity conversion pipeline that preserved shared content as reusable AsciiDoc attributes. I constrained the model to transform structure only and never change content, reviewed every diff line by line, and used automated link and build validation to catch regressions. Conversion cycles dropped from days to hours.

The conversion work also surfaced gaps in the build system itself. I shared the stop-gap scripts and documentation with the engineering managers who owned the build tooling, and they translated that work into permanent improvements to how the system handled conversion. Other writers and platform engineering teams have since built on the tooling and processes.

## What this demonstrates

- Leading documentation-infrastructure modernization from pilot to repeatable adoption pattern
- Designing contribution models that lower the barrier for engineers, product managers, and partners
- Building AI-assisted automation with deterministic validation and human-in-the-loop review
- Using prototypes and stop-gap tooling to influence engineering-owned platform improvements
- Preparing documentation systems for AI-assisted, token-efficient workflows

## Outcomes

ROSA has stayed continuously maintained in AsciiDoc since adoption, and the modernization pattern expanded to EKS, SAP on AWS, and regulated-region documentation work. EKS engineering contributions rose about 25% after adoption. The AI-assisted tooling cut conversion time from days to hours, and engineering managers, writers, and platform teams built on the scripts, documentation, and processes across the organization.

---

> Cody was a leader in converting our team's documentation to AsciiDoc, making our materials more accessible to contributions by PMs and engineers. The success of that project extended across the organization, with other documentation teams adopting our tooling and instructions for their own conversions. He developed Python scripts using Anthropic Claude and Cline workflows to drastically reduce manual documentation conversion time.
>
> — Chris Negus, author and technical writer, AWS (worked with Cody on the same team)
