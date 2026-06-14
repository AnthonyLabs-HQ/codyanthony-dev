---
title: ROSA Jobs-to-be-Done Content Redesign
description: Restructuring ROSA documentation around customer workflows. Merged duplicate getting started pages into a tabbed interface, consolidated policy documentation, and retitled pages to match customer goals.
section: documentation-strategy
order: 20
---

When I joined as ROSA's first dedicated technical writer, its documentation was organized around product features rather than customer workflows. I restructured the ROSA User Guide around Jobs-to-be-Done, consolidating duplicate and fragmented content into goal-based guidance. This is the documentation-strategy view; for the console and getting-started work on the same product, see [ROSA Day 1 Experience](/case-studies/console-ux/rosa-prerequisites-automation/) and [ROSA with Hosted Control Planes Launch](/case-studies/console-ux/rosa-hcp-console-integration/).

## The challenge

ROSA's docs had grown organically through feature launches, leaving customers to assemble workflows from fragmented pages. Voice-of-Customer data and engagement metrics showed the cost: duplicate getting-started paths, policy documentation spread across multiple pages, and page titles that reflected product features more than customer intent.

I redesigned the information architecture while ROSA was still launching features continuously, consolidating fragmented content without slowing the feature documentation roadmap.

## The restructure

I first mapped the Jobs-to-be-Done opportunities through a self-initiated content audit in 2022. The audit identified where ROSA documentation could better support the customer journey by consolidating duplicate pages, removing fragmented paths, and reorganizing content around customer goals.

Emerging feature-launch work took priority before I could execute the full restructure, but I kept the redesign active on the backlog and addressed pieces as roadmap capacity allowed. When Jobs-to-be-Done became an organization-wide documentation priority, I was already positioned to move quickly: I revalidated the audit, aligned stakeholders on scope, and executed the restructure in a single sprint.

## The restructure

I first mapped the Jobs-to-be-Done opportunities through a self-initiated content audit in 2022. The audit identified where ROSA documentation could better support the customer journey by consolidating duplicate pages, removing fragmented paths, and reorganizing content around customer goals.

Emerging feature-launch work took priority before I could execute the full restructure, but I kept the redesign active on the backlog and addressed pieces as roadmap capacity allowed. When Jobs-to-be-Done became an organization-wide documentation priority, I was already positioned to move quickly: I revalidated the audit, aligned stakeholders on scope, and executed the restructure in a single sprint.

- **Consolidated cluster-creation workflows.** Merged duplicate getting-started paths into one guide with console and CLI tabs, so customers could compare deployment approaches without leaving the workflow. This required AWS engineering to enable AsciiDoc tablist support in the production publishing system and shipped as the first AWS production use of the syntax.
- **Consolidated policy documentation.** Restructured fragmented IAM policy documentation into a single scannable reference, eliminating four duplicate pages and simplifying both customer navigation and internal review.
- **Introduced environment variables in CLI procedures.** Reworked copy-paste commands into reusable procedures, reducing the risk of configuration errors from mistyped values.
- **Retitled pages to customer goals.** Renamed pages around the job a customer was trying to complete, such as _Create your first cluster_, rather than the underlying feature name.

I led the review across AWS and Red Hat product, engineering, and documentation stakeholders to align on scope and keep the cross-vendor narrative coherent.

## What this demonstrates

- Using Jobs-to-be-Done principles to reshape documentation strategy
- Turning audit findings, Voice-of-Customer data, and engagement signals into an executable IA plan
- Sequencing strategic IA work alongside an active feature-launch roadmap
- Driving format and publishing-system changes in service of better customer workflows
- Coordinating review across AWS and Red Hat product, engineering, and documentation stakeholders

## Outcomes

The restructure gave ROSA customers a clearer path through core workflows. Instead of choosing between duplicate getting-started pages or assembling policy information from scattered references, customers could follow consolidated, goal-based guidance organized around the work they were trying to complete.

The work also made the documentation easier to maintain. It removed duplicate pages, aligned titles and navigation to customer jobs, and shipped with first-pass content-review approval. The restructure was among the first in its organizational cohort to complete a Jobs-to-be-Done redesign while the service continued launching features.

## Live documentation

- [ROSA User Guide](https://docs.aws.amazon.com/rosa/latest/userguide/) — complete restructured documentation ([archived snapshot](https://web.archive.org/web/20260508131635/https://docs.aws.amazon.com/rosa/latest/userguide/))
- [ROSA Getting Started](https://docs.aws.amazon.com/rosa/latest/userguide/getting-started-classic-cli.html) — consolidated workflow with tabbed interface ([archived snapshot](https://web.archive.org/web/20260412124606/https://docs.aws.amazon.com/rosa/latest/userguide/getting-started-classic-cli.html))
- [AWS Managed Policies](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html) — unified policy reference ([archived snapshot](https://web.archive.org/web/20260314213608/https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html))
